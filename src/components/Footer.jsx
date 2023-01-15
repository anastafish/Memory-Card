import '../styles/header.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <p className="footer">
              Copyright © {new Date().getFullYear()} AnasTafish
            </p>
        </div>
    )
}