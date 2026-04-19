/**
 * Main Application Component
 * Sets up routing, protected routes, and the overall layout structure.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Groups from './pages/Groups';

import GroupDetails from './pages/GroupDetails';
import Clubs from './pages/Clubs';
import Sessions from './pages/Sessions';
import Notes from './pages/Notes';
import Chats from './pages/Chats';
import Help from './pages/Help';
import Profile from './pages/Profile';
import SessionDashboard from './components/Sessions/Session_org/SessionDashboard';
import StudentDashboard from './components/Sessions/Session_stu/StudentDashboard';
import AddSession from './components/Sessions/Session_org/AddSession';
import Preview from './components/Sessions/Session_org/Preview';
import ViewSession from './components/Sessions/Session_org/ViewSession';
import UpdateSession from './components/Sessions/Session_org/UpdateSession';
import ViewSession2 from './components/Sessions/Session_stu/ViewSession2';

/**
 * ProtectedRoute Component
 * Redirects unauthenticated users to the login page.
 */
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Route */}
                <Route path="/login" element={<Auth />} />

                {/* Protected Routes inside DashboardLayout */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Dashboard" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>

                <Route
                    path="/groups"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Groups" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Groups />} />
                    <Route path=":id" element={<GroupDetails />} />
                </Route>

                <Route
                    path="/clubs"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Clubs" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Clubs />} />
                </Route>

                <Route
                    path="/sessions"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Sessions" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Sessions />} />
                </Route>

                <Route
                    path="/notes"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Notes" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Notes />} />
                </Route>

                <Route
                    path="/chats"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Chats" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Chats />} />
                </Route>

                <Route
                    path="/help"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Help" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Help />} />
                </Route>

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Profile" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Profile />} />
                </Route>

                 <Route
                    path="/SessionDashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="SessionDashboard" />
                            <SessionDashboard />
                            <DashboardLayout/>
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<SessionDashboard />} />
                </Route>
                 <Route
                    path="/StudentDashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="StudentDashboard" />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<StudentDashboard />} />
                </Route>
                 <Route
                    path="/AddSession"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="AddSession" />
                           
                            
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<AddSession />} />
                </Route>
                 <Route
                    path="/Preview"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="Preview" />
                            
                            
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Preview />} />
                </Route>
                 <Route
                    path="/ViewSession/:itemId"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="ViewSession" />
                            
                            
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<ViewSession />} />
                </Route>
                 <Route
                    path="/UpdateSession/:id"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="UpdateSession" />
                            
                            
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<UpdateSession />} />
                </Route>
                <Route
                    path="/ViewSession2/:itemId"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout title="ViewSession2" />
                            
                            
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<ViewSession2 />} />
                </Route>
                

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
