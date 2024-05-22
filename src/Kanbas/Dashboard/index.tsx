export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>


                <div className="wd-dashboard-course">
                    <img src="/images/cloudcomputing.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/6620/Home">
                            CS6620 Cloud Computing
                        </a>
                        <p className="wd-dashboard-course-title">
                            Fundamentals Cloud Computing
                        </p>
                        <a href="#/Kanbas/Courses/6620/Home"> Go </a>
                    </div>
                </div>


                <div className="wd-dashboard-course">
                    <img src="/images/datastructures.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/5008/Home">
                            CS5008 Data Structures
                        </a>
                        <p className="wd-dashboard-course-title">
                            Data Structures and Algorithms
                        </p>
                        <a href="#/Kanbas/Courses/5008/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/discretestructures.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/5002/Home">
                            CS5002 Discrete Structures
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures and Math
                        </p>
                        <a href="#/Kanbas/Courses/5002/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/mobileappdev.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/6900/Home">
                            CS6900 Mobile App Dev
                        </a>
                        <p className="wd-dashboard-course-title">
                            Mobile App Development
                        </p>
                        <a href="#/Kanbas/Courses/6900/Home"> Go </a>
                    </div>
                </div>


                <div className="wd-dashboard-course">
                    <img src="/images/ood.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/5004/Home">
                            CS5004 OOD
                        </a>
                        <p className="wd-dashboard-course-title">
                            Soild Objected-Oriented Design
                        </p>
                        <a href="#/Kanbas/Courses/5004/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/webdev.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/5610/Home">
                            CS5610 Web Dev
                        </a>
                        <p className="wd-dashboard-course-title">
                            Website development
                        </p>
                        <a href="#/Kanbas/Courses/5610/Home"> Go </a>
                    </div>
                </div>


            </div>
        </div>
    );
}
