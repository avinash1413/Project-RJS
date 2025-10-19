function College({name, location, established}) {
    return (
        <div>
            <h2>College Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Established: {established}</h2>
            {/* <h2>Courses Offered: {courses.join(", ")}</h2> */}
        </div>
    )
}

export default College