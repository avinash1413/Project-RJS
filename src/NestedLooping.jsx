function NestedLooping() {
  const collegeData = [
    {
        collegeName: "ABC College",
        location: "Mumbai",
        establishedYear: 1990,
        courses: ["Engineering", "Arts", "Science"], 
        student: [
            { name: "Avinash", age: 24, rollNo: 101 },
            { name: "Avi", age: 29, rollNo: 102 },
            { name: "Ramesh", age: 25, rollNo: 103 }
        ]
    },
    {
        collegeName: "XYZ College",
        location: "Pune",
        establishedYear: 1985,
        courses: ["Commerce", "Management", "Law"],
        student: [
            { name: "Suresh", age: 23, rollNo: 201 },
            { name: "Mahesh", age: 26, rollNo: 202 },
            { name: "Rajesh", age: 24, rollNo: 203 }
        ]
    },
    {
        collegeName: "PQR College",
        location: "Nagpur",
        establishedYear: 2000,
        courses: ["Medicine", "Pharmacy", "Nursing"],
        student: [
            { name: "Dinesh", age: 27, rollNo: 301 },
            { name: "Ritesh", age: 22, rollNo: 302 },
            { name: "Lokesh", age: 28, rollNo: 303 }
        ]
    }
  ];
    return (
    <div>
      <h1>College and Student Information</h1>
      {collegeData.map((college, collegeIndex) => (
        <div key={collegeIndex} style={{border: "3px solid blue", margin: "10px", padding: "10px", borderRadius: "10px"}}>
          <h2>College Name: {college.collegeName}</h2>
          <p>Location: {college.location}</p>
            <p>Established Year: {college.establishedYear}</p>
            <p>Courses Offered: {college.courses.join(", ")}</p>
          <h3>Students:</h3>
          {college.student.map((student, studentIndex) => (
            <div key={studentIndex} style={{border: "2px solid green", margin: "10px", padding: "10px", borderRadius: "10px"}}>
              <h4>Name: {student.name}</h4>
              <p>Age: {student.age}</p>
                <p>Roll No: {student.rollNo}</p>
            </div>
          ))}
        </div>
        ))}
    </div>
  );
}

export default NestedLooping;

