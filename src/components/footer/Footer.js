import "./footer.css";

function Footer() {
  return (
    <div className="newfooter">
      <div className="newfooter-box">
        <div className="newfooter-box-left">
          <div className="logo"> </div>
          <p>
            Discover a <span className="world-image">world</span> of
            opportunities
          </p>
          <div className="icons">
            <a
              target="_blank"
              href="https://www.facebook.com/enterpriseleague/"
              className="facebook-icon"
            ></a>
            <a
              target="_blank"
              href="https://www.instagram.com/enterpriseleague/"
              className="instagram-icon"
            ></a>
            <a
              target="_blank"
              href="https://twitter.com/enterpriseleag1/"
              className="twitter-icon"
            ></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/enterpriseleague/"
              className="linkedin-icon"
            ></a>
          </div>
        </div>

        <div className="newfooter-box-right">
          <div className="newfooter-box-right-block">
            <span>Company</span>
            <ul className="nav">
              <li className="nav-item">
                <a href="https://enterpriseleague.com/about-us">About</a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/about/team">Team</a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/blog/write-for-us/">
                  Write for us
                </a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/blog/advertise-with-us/">
                  Advertise
                </a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/about/newsroom">
                  Newsroom
                </a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/blog/careers/">Careers</a>
              </li>
              <li className="nav-item">
                <a href="https://enterpriseleague.com/blog/contact/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="newfooter-box-right-block">
              <span>Product</span>
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/product">Platform</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/dealzone">Dealzone</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/explore">Directory</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/hire">All categories</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/solutions">Solutions</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/why-get-listed">
                    Get listed
                  </a>
                </li>
              </ul>
            </div>
            <div className="newfooter-box-right-block">
              <span>Resources</span>
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/blog/">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://enterpriseleague.com/blog/faq/">Support</a>
                </li>

                <li className="nav-item">
                  <a href="https://enterpriseleague.com/blog/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="newfooter-box-right-block"></div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Copyright <span id="year">2022</span> Enterprise League. All right
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
