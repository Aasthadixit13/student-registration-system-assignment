
        const addBtn = document.getElementById("addBtn");
        const dialog = document.getElementById("studentDialog");
        const studentForm = document.getElementById("studentForm");
        const studentList = document.getElementById("studentList");
        const closeDialog = document.getElementById("closeDialog");

        let students = [];

        addBtn.addEventListener("click", () => dialog.showModal());
        closeDialog.addEventListener("click", () => dialog.close());

        studentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const id = document.getElementById("id").value;
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;

            students.push({ id, name, email, contact });
            displayStudents();
            studentForm.reset();
            dialog.close();
        });

        function displayStudents() {
            if (students.length === 0) {
                studentList.innerHTML = `<p>No students registered yet. Click "Add Student" to get started!</p>`;
                return;
            }
            studentList.innerHTML = "";
            students.forEach((s, i) => {
                studentList.innerHTML += `
          <div class="student-card d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div class="student-info">
              <p><b>ID:</b> ${s.id}</p>
              <p><b>Name:</b> ${s.name}</p>
              <p><b>Email:</b> ${s.email}</p>
              <p><b>Contact:</b> ${s.contact}</p>
            </div>
            <button class="mt-2 mt-md-0" onclick="deleteStudent(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;
            });
        }

        function deleteStudent(index) {
            if (confirm("Delete this student?")) {
                students.splice(index, 1);
                displayStudents();
            }
        }
        window.deleteStudent = deleteStudent;
    