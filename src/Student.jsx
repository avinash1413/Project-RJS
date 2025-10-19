function Student({ student }) {
  return (
    <h2>
      Name: {student.name}, 
      Age: {student.age}, 
      Roll No: {student.rollNo}
    </h2>
  );
}
export default Student;