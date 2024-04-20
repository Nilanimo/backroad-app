const SocialLink = ({href,icon,itemClass}) => {
  return (
    <div>
        <li >
                        <a href={href} target="_blank" className={itemClass} rel='noreferrer'
                          ><i className={icon}></i></a>
                        </li>

    </div>
  )
}
export default SocialLink