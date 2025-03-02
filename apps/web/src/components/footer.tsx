const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-secondary text-xs">
      &copy; {year} All rights reserved
    </footer>
  )
}

export default Footer;
