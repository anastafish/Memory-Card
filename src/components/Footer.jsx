import '../styles/header.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <p className="footer">
              Copyright © {new Date().getFullYear()} <a target="_blank" href="https://github.com/anastafish">AnasTafish</a>
            </p>
        </div>
    )
}