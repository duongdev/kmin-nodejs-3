# Features

- [x] Thêm task
- [x] List tasks
- [x] Edit task
- [x] Delete task
- [ ] Đăng ký/đăng nhập user
- [ ] Categorize tasks
- [ ] Sort tasks: Priority, Due date, Title
- [ ] Search tasks: Title

---

- [ ] Alert/notify by notification/email
- [ ] Phân công task
- [ ] Live editing & Real-time update
- [ ] Comment/Collaboration
- [ ] Phân quyền: by what?

# Models

## User

- ID \*!
- Email \*!
- Username \*!
- Password \*
- DOB
- Sex

## Task

1. Create task without `completed` & `completedAt`; `completed` defaults to `false`. `completedAt` defaults to `null`.
2. Update a task `PATCH /tasks/:taskId`: `title`, `body`, `completed`
3. If `completed` is updated from `false` to `true`, set `completedAt` to current time. Otherwise, set `completedAt` to `null`.
4. Delete a task: `DELETE /tasks/:taskId`

<!-- - ID -->

- Title
- Body
- Completed
- Completed At
  <!-- - Created Date -->
  <!-- - Due Date -->
  <!-- - Created By -->
  <!-- - Assigned To -->
  <!-- - Priority: Low | Medium | High -->

## Category/group/folder

- ID
- Name
- Created By
- Created Date


# MongoDB

NoSQL database

Database => todo-app

Table -> Collection => Tasks, Users
Row -> Document
  - Task => 

Schema -> Model