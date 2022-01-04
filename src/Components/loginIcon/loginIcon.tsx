import propType from 'prop-types'

export default function LoginIcon(props: any) {
  const {position, description, onClick} = props
  return (
    <a style={{display: 'flex', width: '149px', marginTop: '10px', lineHeight: '38px'}} onClick={onClick}>
      <i className="theme-logo" style={{width: '10px', height: '10px', backgroundPosition: position}}></i>
      <span style={{marginLeft: '14px'}}>{description}</span>
    </a>
  )
}

LoginIcon.propType = {
  position: propType.string.isRequired,
  description: propType.string.isRequired,
  onClick: propType.func
}

LoginIcon.defaultProptype = {
  position: '-150px -670px',
  description: 'deault'
}
