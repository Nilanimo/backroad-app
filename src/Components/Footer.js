import { SocialLinks } from "../data"
import PageLinks from "./PageLinks"
import SocialLink from "./SocialLink"


const Footer = () => {
  return (
    <div>
        <footer className="section footer">
      <ul className="footer-links">
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      </ul>
      <ul className="footer-icons">

        {
            SocialLinks.map((link)=>{
                
                return(
                    <SocialLink key={link.id} {...link} itemClass='footer-icon'/>
                )
            })
        }
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </div>
  )
}
export default Footer