"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { getUserId } from "../../../Login/userState";
import { initFirebase } from "@/app/Firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import styles from "./Upload.module.css";

function Upload() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [csvFiles, setCsvFiles] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        initFirebase();
        const db = getFirestore();
        const userId = getUserId();
        if (userId) {
          const userDocRef = doc(db, "users", userId);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setIsAdmin(userData.admin || false);
          } else {
            console.log("No such document!");
          }
        }
        fetchCsvFiles();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const fetchCsvFiles = async () => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, "csvFiles/");
      const listResult = await listAll(storageRef);
      const filePromises = listResult.items.map(async (item) => {
        const downloadURL = await getDownloadURL(item);
        return { name: item.name, url: downloadURL };
      });
      const files = await Promise.all(filePromises);
      setCsvFiles(files);
    } catch (error) {
      console.error("Error fetching CSV files:", error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `csvFiles/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          setUploadProgress(0);
          alert("File uploaded successfully!");
          fetchCsvFiles();
        }
      );
    }
  };

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>CSV HUB</h2>
      </div>
      {isAdmin && (
        <div className={styles.uploadContainer}>
          <input
            type="file"
            accept=".csv"
            id="csvFileInput"
            onChange={handleFileUpload}
            className={styles.fileInput}
          />
          <label htmlFor="csvFileInput" className={styles.fileLabel}>
            <span className={styles.uploadIcon}>&#128451;</span>
            <span className={styles.uploadText}>Upload CSV File</span>
          </label>
          {uploadProgress > 0 && (
            <div className={styles.progressBar}>
              <div
                style={{ width: `${uploadProgress}%` }}
                className={styles.progress}
              ></div>
            </div>
          )}
        </div>
      )}
      <div className={styles.fileList}>
        <h3 className={styles.csvHeader}>CSV Files</h3>
        <ul>
          {csvFiles.map((file, index) => (
            <li key={index} className={styles.fileItem}>
              <span className={styles.fileName}>{file.name}</span>
              <button
                onClick={() => handleDownload(file.url)}
                className={styles.downloadButton}
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Upload;
