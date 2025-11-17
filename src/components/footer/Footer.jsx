import github from 'assets/github.png'
import linkedin from 'assets/linkedin.png'
import upwork from 'assets/upwork.png'
import telegram from 'assets/telegram.png'
import stackoverflow from 'assets/stackoverflow.png'
import portfolio from 'assets/portfolio.png'
import './Footer.css'

const contactIconsData = [
  { id: 4, iconSrc: upwork, hrefLink:"https://www.upwork.com/freelancers/~01d3c6831f8ff12b23?mp_source=share", altText: "UpWork"},
  { id: 1, iconSrc: github, hrefLink:"https://github.com/gioelese", altText: "GitHub"},
  { id: 2, iconSrc: telegram, hrefLink:"https://t.me/gioele_19412", altText: "Telegram"},
  { id: 6, iconSrc: portfolio, hrefLink:"https://gioelese.github.io", altText: "My portfolio"},
  { id: 3, iconSrc: linkedin, hrefLink:"https://www.linkedin.com/in/gioele-sesso-1095b0262/", altText: "Linkedin"},
  { id: 5, iconSrc: stackoverflow, hrefLink:"https://stackoverflow.com/users/30738338/gioele", altText: "StackOverflow"},
];
const ContactIcon = ({iconSrc, hrefLink, altText}) => {
    return(
        <button className='contact-icon-button' title={altText}>
          <a href={hrefLink} target="_blank" className="contact-icon-link-container">
            <img src={iconSrc} alt={altText} className='contact-icon'/>
          </a>
        </button>
    );
};

function Footer() {

  return (
    <footer>
      <span className="barlow-semibold title">
        Sesso Industry
      </span>
      <span className="barlow-light subtitle">
        Designed in Vicenza, Italy
      </span>
      <div className='icons-container'>
        {
          contactIconsData.map(icon =>(
            <ContactIcon
              key={icon.id}
              iconSrc={icon.iconSrc}
              hrefLink={icon.hrefLink}
              altText={icon.altText}
            />
          ))
        }
      </div>
    </footer>
  )
}

export default Footer