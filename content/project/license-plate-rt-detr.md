# Real-Time Automatic License Plate Recognition using RT-DETR v2

## Overview

This project presents an end-to-end Automatic License Plate Recognition (ALPR) system designed for real-time traffic and surveillance applications. The system combines a transformer-based object detection model with an optimized Optical Character Recognition (OCR) pipeline to accurately detect and recognize license plates from vehicle images.

The project demonstrates practical system design for computer vision applications where detection accuracy, latency and robustness are critical.

---

## Problem Statement

Traditional license plate recognition systems often face challenges such as:

* Missed detections in real-world conditions
* High inference latency in multi-stage pipelines
* OCR errors caused by poor localization
* Limited robustness across different object scales

The goal of this project was to design a real-time ALPR pipeline that prioritizes high detection recall and reliable text recognition for practical deployment scenarios.

---

## Solution

An end-to-end computer vision pipeline was developed using **RT-DETR v2**, a transformer-based real-time object detection model, combined with an optimized **EasyOCR** module for text extraction.

The system performs:

1. License plate detection
2. Plate region cropping and preprocessing
3. Optical character recognition
4. Visualization through an interactive web interface

This design ensures efficient inference and improved recognition accuracy.

---

## Dataset Preparation

* Source dataset obtained from Roboflow in COCO annotation format
* Dataset cleaning performed to:

  * Remove unused class categories
  * Remap class indices
  * Exclude images without license plates
  * Convert annotations into Hugging Face dataset format

Final Task:

* Single-class object detection (license_plate)

---

## Model Architecture

### Detector – RT-DETR v2

* Transformer-based object detection model
* ResNet-50 backbone pretrained on COCO
* Fine-tuned for license plate localization
* End-to-end detection without traditional Non-Maximum Suppression

This architecture enables high recall and low latency suitable for real-time applications. 

### Recognizer – Optimized EasyOCR

* Integrated OCR pipeline for extracting plate text
* Performance optimization using reduced canvas size
* Achieved inference latency under ~5 seconds on standard hardware

### Interface

* Gradio-based interactive UI
* Users can upload images and visualize detection bounding boxes and extracted text

---

## Training Setup

* Framework: Hugging Face Transformers
* Training Strategy: Fine-tuning pretrained RT-DETR weights
* Objective: Improve localization recall for downstream OCR accuracy

---

## Evaluation Results

The detection model achieved strong performance on the test dataset:

* mAP (0.5–0.95): ~0.97
* mAP@0.5: ~0.97
* Mean Average Recall (MAR@100): ~0.98

Results indicate reliable detection across small, medium and large license plates, making the system suitable for real-world applications. 

---

## Key Challenges

* Handling dataset inconsistencies during preprocessing
* Balancing detection accuracy with inference speed
* Ensuring OCR reliability under varying image conditions
* Designing an intuitive real-time visualization interface

---

## Limitations

* OCR performance depends on plate visibility and lighting conditions
* Dataset bias toward controlled environments such as parking areas
* Limited environmental diversity affecting generalization
* Motion blur and low-resolution scenarios require further optimization

---

## Impact

This project demonstrates:

* Practical deployment of transformer-based detection models
* Importance of prioritizing localization quality in OCR pipelines
* End-to-end engineering mindset for real-time computer vision systems

---

## Links

**ReadyTensor Publication:**
[[Add ReadyTensor Link Here](https://app.readytensor.ai/publications/real-time-automatic-license-plate-recognition-using-rt-detr-v2-mphTGwpTxpdr)]

**Live Demo (Hugging Face Spaces):**
[[Add Demo Link Here](https://huggingface.co/spaces/justjuu/license-plate-recognition-rtdetr)]

**GitHub Repository:**
[[Add GitHub Repo Link Here](https://github.com/ChidambaraRaju/real-time-license-plate-detection-ocr)]

**HuggingFace Model Card:**
[[Add HuggingFace Model Card Link](https://huggingface.co/justjuu/rtdetr-v2-license-plate-detection)]