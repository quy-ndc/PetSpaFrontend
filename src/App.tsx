import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookingPage from './pages/BookingPage/booking-page'

function App() {
  return (
    <>
      <>
      <BrowserRouter>
        <Routes>
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
