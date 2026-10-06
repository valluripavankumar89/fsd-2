import { useState } from "react";
import "./App.css";

const subjects = [
  { name: "Mathematics", teacher: "Dr. Kumar", progress: 82, color: "#6366f1" },
  { name: "Computer Science", teacher: "Prof. Ravi", progress: 94, color: "#06b6d4" },
  { name: "Physics", teacher: "Dr. Priya", progress: 76, color: "#f59e0b" },
  { name: "English", teacher: "Mrs. Anitha", progress: 88, color: "#ec4899" },
];

const assignments = [
  { title: "React Mini Project", subject: "Computer Science", due: "Tomorrow", priority: "High" },
  { title: "Integration Problems", subject: "Mathematics", due: "Oct 10", priority: "Medium" },
  { title: "Physics Lab Report", subject: "Physics", due: "Oct 12", priority: "Low" },
];

const timetable = [
  ["09:00", "Mathematics", "Room 204"],
  ["10:00", "Computer Science", "Lab 2"],
  ["11:30", "Physics", "Room 108"],
  ["01:30", "English", "Room 302"],
];

function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">S</div>
          <span>Student<span className="logo-highlight">Hub</span></span>
        </div>

        <nav>
          {["Dashboard", "Courses", "Assignments", "Timetable", "Exams"].map(
            (item) => (
              <button
                key={item}
                className={active === item ? "nav-item active" : "nav-item"}
                onClick={() => setActive(item)}
              >
                <span className="nav-icon">
                  {item === "Dashboard" && "⌂"}
                  {item === "Courses" && "▣"}
                  {item === "Assignments" && "✓"}
                  {item === "Timetable" && "◷"}
                  {item === "Exams" && "◆"}
                </span>
                {item}
              </button>
            )
          )}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>
            <strong>Need Help?</strong>
            <p>Contact your academic advisor.</p>
            <button>Get Support</button>
          </div>

          <div className="profile-mini">
            <div className="avatar">AR</div>
            <div>
              <strong>Arun Raj</strong>
              <small>Computer Science</small>
            </div>
            <span>⋮</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <div>
            <p className="welcome">Good morning, Arun 👋</p>
            <h1>Welcome back!</h1>
          </div>

          <div className="top-actions">
            <button className="icon-button">⌕</button>
            <button className="icon-button notification">♢<span></span></button>
            <div className="date">Tuesday, October 6</div>
          </div>
        </header>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card purple">
            <div className="stat-top">
              <span>Overall GPA</span>
              <div className="stat-icon">★</div>
            </div>
            <strong>8.7</strong>
            <p>↑ 0.4 from last semester</p>
          </div>

          <div className="stat-card blue">
            <div className="stat-top">
              <span>Attendance</span>
              <div className="stat-icon">◉</div>
            </div>
            <strong>92%</strong>
            <p>↑ 2% from last month</p>
          </div>

          <div className="stat-card orange">
            <div className="stat-top">
              <span>Assignments</span>
              <div className="stat-icon">✓</div>
            </div>
            <strong>18 <small>/ 22</small></strong>
            <p>4 assignments remaining</p>
          </div>

          <div className="stat-card green">
            <div className="stat-top">
              <span>Study Hours</span>
              <div className="stat-icon">◷</div>
            </div>
            <strong>24.5h</strong>
            <p>↑ 12% this week</p>
          </div>
        </section>

        <div className="content-grid">
          {/* Left */}
          <div className="left-column">
            <section className="card">
              <div className="section-heading">
                <div>
                  <h2>My Courses</h2>
                  <p>Track your learning progress</p>
                </div>
                <button className="view-button">View all →</button>
              </div>

              <div className="courses">
                {subjects.map((subject) => (
                  <div className="course" key={subject.name}>
                    <div
                      className="course-icon"
                      style={{ background: `${subject.color}18`, color: subject.color }}
                    >
                      {subject.name.charAt(0)}
                    </div>

                    <div className="course-info">
                      <div className="course-title">
                        <strong>{subject.name}</strong>
                        <span>{subject.progress}%</span>
                      </div>
                      <p>{subject.teacher}</p>
                      <div className="progress">
                        <div
                          style={{
                            width: `${subject.progress}%`,
                            background: subject.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <div className="section-heading">
                <div>
                  <h2>Upcoming Assignments</h2>
                  <p>Don't miss your deadlines</p>
                </div>
                <button className="view-button">View all →</button>
              </div>

              <div className="assignment-list">
                {assignments.map((assignment) => (
                  <div className="assignment" key={assignment.title}>
                    <div className="check-circle"></div>

                    <div className="assignment-info">
                      <strong>{assignment.title}</strong>
                      <p>{assignment.subject}</p>
                    </div>

                    <span className={`priority ${assignment.priority.toLowerCase()}`}>
                      {assignment.priority}
                    </span>

                    <div className="due">
                      <small>Due</small>
                      <strong>{assignment.due}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="right-column">
            <section className="card attendance-card">
              <div className="section-heading">
                <div>
                  <h2>Attendance</h2>
                  <p>This semester</p>
                </div>
                <button className="more">•••</button>
              </div>

              <div className="attendance-chart">
                <div className="donut">
                  <div>
                    <strong>92%</strong>
                    <span>Present</span>
                  </div>
                </div>

                <div className="attendance-details">
                  <div>
                    <span className="dot present"></span>
                    <div>
                      <strong>Present</strong>
                      <small>46 classes</small>
                    </div>
                  </div>

                  <div>
                    <span className="dot absent"></span>
                    <div>
                      <strong>Absent</strong>
                      <small>4 classes</small>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="card">
              <div className="section-heading">
                <div>
                  <h2>Today's Schedule</h2>
                  <p>Tuesday, October 6</p>
                </div>
              </div>

              <div className="schedule">
                {timetable.map(([time, subject, room], index) => (
                  <div
                    className={index === 1 ? "schedule-item current" : "schedule-item"}
                    key={subject}
                  >
                    <span className="schedule-time">{time}</span>
                    <div className="schedule-line"></div>
                    <div className="schedule-info">
                      <strong>{subject}</strong>
                      <small>{room}</small>
                    </div>
                    {index === 1 && <span className="now">NOW</span>}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
