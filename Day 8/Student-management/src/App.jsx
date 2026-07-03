import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    attendance: "Present",
  });

  const styles = {
    body: {
      background: "#f4f6f9",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial",
    },
    container: {
      maxWidth: "1100px",
      margin: "auto",
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    title: {
      textAlign: "center",
      color: "#0d6efd",
      marginBottom: "20px",
    },
    form: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "15px",
    },
    button: {
      background: "#0d6efd",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    toolbar: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      background: "#0d6efd",
      color: "white",
      padding: "10px",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "center",
    },
    present: {
      background: "green",
      color: "white",
      padding: "5px 10px",
      borderRadius: "15px",
    },
    absent: {
      background: "red",
      color: "white",
      padding: "5px 10px",
      borderRadius: "15px",
    },
    delete: {
      background: "crimson",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (!student.id || !student.name || !student.department) {
      alert("Please fill all fields");
      return;
    }

    if (students.find((s) => s.id === student.id)) {
      alert("Student ID already exists");
      return;
    }

    setStudents([...students, student]);

    setStudent({
      id: "",
      name: "",
      department: "",
      attendance: "Present",
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) => {
    const text = search.toLowerCase();

    const searchMatch =
      s.id.toLowerCase().includes(text) ||
      s.name.toLowerCase().includes(text) ||
      s.department.toLowerCase().includes(text);

    const filterMatch =
      filter === "All" || s.attendance === filter;

    return searchMatch && filterMatch;
  });

  return (
    <div style={styles.body}>
      <div style={styles.container}>

        <h1 style={styles.title}>🎓 Student Management System</h1>

        <div style={styles.form}>

          <input
            style={styles.input}
            type="text"
            name="id"
            placeholder="Student ID"
            value={student.id}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="text"
            name="department"
            placeholder="Department"
            value={student.department}
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="attendance"
            value={student.attendance}
            onChange={handleChange}
          >
            <option>Present</option>
            <option>Absent</option>
          </select>

          <button style={styles.button} onClick={addStudent}>
            Add Student
          </button>

        </div>

        <div style={styles.toolbar}>

          <input
            style={{ ...styles.input, flex: 1 }}
            type="text"
            placeholder="Search ID, Name, Department"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            style={styles.input}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Present</option>
            <option>Absent</option>
          </select>

        </div>

        <h3>Total Students : {filteredStudents.length}</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Student ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Attendance</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.length === 0 ? (
              <tr>
                <td style={styles.td} colSpan="5">
                  No Students Found
                </td>
              </tr>
            ) : (
              filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td style={styles.td}>{s.id}</td>
                  <td style={styles.td}>{s.name}</td>
                  <td style={styles.td}>{s.department}</td>

                  <td style={styles.td}>
                    <span
                      style={
                        s.attendance === "Present"
                          ? styles.present
                          : styles.absent
                      }
                    >
                      {s.attendance}
                    </span>
                  </td>

                  <td style={styles.td}>
                    <button
                      style={styles.delete}
                      onClick={() => deleteStudent(s.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;