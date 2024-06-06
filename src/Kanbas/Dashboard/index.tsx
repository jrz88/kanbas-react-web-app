export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/cloudcomputing.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/6620/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6620 Cloud Computing
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Cloud Computing
                                </p>
                                <a href="#/Kanbas/Courses/6620/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>




                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/datastructures.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5008/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5008 Data Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Structures & Algorithms
                                </p>
                                <a href="#/Kanbas/Courses/5008/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/discretestructures.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5002/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Discrete Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Discrete Structures & Math
                                </p>
                                <a href="#/Kanbas/Courses/5002/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>



                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/mobileappdev.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/6900/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6900 Mobile App Dev
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Mobile App Development
                                </p>
                                <a href="#/Kanbas/Courses/6900/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/ood.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5004/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 OOD
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Objected-Oriented Design
                                </p>
                                <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/webdev.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5610/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610 Web Dev
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Website development
                                </p>
                                <a href="#/Kanbas/Courses/5610/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                 

                </div>
            </div>
        </div>
    );
}
