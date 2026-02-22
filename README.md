Stucture project
- สร้างไฟล์สำหรับเขียนพวก Scenario , test case ไว้ใน Folder test
- สร้างไฟล์สำหรับการเก็บ function หรือเก็บพวก Step ต่างๆ ไวใน Folder page
- พวก username , password สำหรับการเทส จะเก็บไว้ใน Folder data

### ผมมีสร้าง Scenario เพิ่มเติมจากโจทย์โดยทีการเช็ค permission สำหรับ user
How to run test
- Clone project automate-assignment >> Github https://github.com/TaeTeerapat/assignment.git
- npm install
- Run test file userlogin.spec.ts >> npx playwright test src/tests/userlogin.spec.ts --debug
- Run test file validateUser.spec.ts >> npx playwright test src/tests/validateUser.spec.ts --debug