export default function Footer() {
    
    return (
      <footer className="bg-red-700 text-white py-4 px-6 md:px-12">
        <div className="flex">
            <article>
                <h2>Contact us</h2>
                <ul>
                    <li><a href="sales@HandcraftedHaven.com" target="_blank">sales@HandcraftedHaven.com</a></li>
                    <li><span>+1 (801) 999-9999</span></li>
                    <li><span>5630 Santa Monica Blvd, Hollywood</span></li>
                    <li><span>Los Ángeles, CA 90038, United States</span></li>
                </ul>         
            </article>
            <article>
                <h2>Follow us</h2>
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.youtube.com/" target="_blank">YouTube</a></li>
                    <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                </ul> 
            </article>  
            <article >
                <h2>Handcrafted Haven</h2>
                <img src="images\logo01.png" alt="Logo"/>
            </article>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm">© 2024 Handcrafted Haven. All rights reserved.</p>
        </div>
      </footer>
    );
}