# BMP Swagger-Style API Documentation Portal

An interactive, responsive API Documentation Portal built with **React**, **Vite**, and **Tailwind CSS**, designed for the **Business Management Platform (BMP)** Express backend.

## Features

- **Swagger UI Experience**: Method-specific colors (GET Blue, POST Green, PUT/PATCH Orange, DELETE Red), compact rows with collapsible accordions, endpoint descriptions, and expand/collapse arrow.
- **7 Collapsible API Groups**:
  - **Activity**: Audit logs and event histories (`GET /api/activity/logs`).
  - **Authentication**: Registration, login, logout, and profile (`/api/register`, `/api/login`, `/api/logout`, `/api/profile`).
  - **Company**: Company workspace registration, admin verification, and user access approval/rejection (`/api/company`, `/api/getcompany/:adminId`, `/api/approve/:userId`, `/api/reject/:userId`).
  - **Users**: Directory lookup and role modification (`/api/users`, `/api/users/:userId/role`).
  - **Projects**: Project creation, role-scoped project lists, and member allocation (`/api/project`, `/api/get/project`, `/api/:projectId/members`).
  - **Tickets**: Ticket creation, retrieval, updates, and deletion (`/api/ticket/:projectId`, `/api/tickets`, `/api/update/ticket/:ticketId`, `/api/delete/ticket/:ticketId`).
  - **Dashboard**: Role-specific analytics, status cards, and project summaries (`/api/admin`, `/api/status/card`, `/api/status/project`, `/api/manager`, `/api/employee`, `/api/customer`).
- **Interactive "Try It Out"**:
  - Live parameter inputs (path params, query params).
  - JSON request body editor with syntax highlighting and pre-filled sample data.
  - "Execute" sends real HTTP requests to `http://localhost:4000/api` (or any custom server URL).
  - Displays actual HTTP status codes, latency in milliseconds, formatted JSON response, response headers, and live cURL commands.
- **Authorize Modal**:
  - Bearer JWT token storage with instant decode preview showing role, user ID, company ID, and expiration.
  - Automatically attaches `Authorization: Bearer <token>` to protected endpoints.
- **Search & Filter**: Real-time filtering by keyword (path, summary, tag) and HTTP method pills (`ALL`, `GET`, `POST`, `PUT/PATCH`, `DELETE`).
- **One-Click Actions**: "Copy URL", "Copy cURL", "Copy Response JSON", "Expand All", and "Collapse All".
- **Backend Health Check**: Real-time ping indicator displaying server connection status and latency.

---
<img width="1076" height="684" alt="image" src="https://github.com/user-attachments/assets/c52b598b-f7f9-404c-9a10-a50e47b821d5" />
<img width="1080" height="824" alt="image" src="https://github.com/user-attachments/assets/2c7598dc-ee8f-4ea8-b194-7c3a500b1898" />
<img width="997" height="649" alt="image" src="https://github.com/user-attachments/assets/d23bf9f5-c0dd-415f-9a7d-5ff2cf16b3cc" />

![alt text](image-1.png)

## Getting Started

### 1. Start the Backend API Server

In a terminal, start the Express backend:

```bash
cd "C:\Users\abc\Documents\B_M_P\Backend"
npm run dev
```

_(The backend runs on `http://localhost:4000`)_

### 2. Start the API Documentation Portal

In another terminal, start this documentation portal:

```bash
cd "c:\Users\abc\Desktop\API Management"
npm run dev
```

Open **`http://localhost:5174`** in your browser.

### 3. (Optional) Run the BMP Management Frontend

```bash
cd "C:\Users\abc\Documents\B_M_P\BM_Frontend\BMS"
npm run dev
```

Navigate to **`http://localhost:5173/admin/api-docs`** to see the integrated portal inside the BMP Admin dashboard.
