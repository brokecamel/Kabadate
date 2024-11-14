import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="relative bg-black text-white z-0 overflow-hidden font-jura pb-4 pt-16">
            <div className="absolute inset-x-0 -top-20 left-32 transform-gpu overflow-hidden blur-3xl sm:-top-60 -z-10" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-br from-transparent to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 z-10 px-4 md:px-10 pt-2">
                <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="/projects" className='animated-link-2'>Projects</Link></li>
                        <li><Link href="/features" className='animated-link-2'>Feature</Link></li>
                        <li><Link href="/locations" className='animated-link-2'>Locations</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=c8838da4-11aa-45d8-8676-57cb42761d42" target="_blank" className='animated-link-2'>Privacy Policy</Link></li>
                        <li><Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=fc29bb79-0f7f-44a9-9835-6fb5120d55b1" target="_blank" className='animated-link-2'>Cookie Policy</Link></li>
                        <li><Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3d9f825f-a062-4535-af08-a93233ad3df6" target="_blank" className='animated-link-2'>Disclaimer</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Help</h3>
                    <ul className="space-y-2">
                        <li><Link href="/support" className='animated-link-2'>Support</Link></li>
                        <li><Link href="/contact" className='animated-link-2'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Social</h3>
                    <ul className="space-y-2">
                        <li><Link href="https://www.instagram.com/kaba_date/?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target="_blank" className='animated-link-2'>Instagram</Link></li>
                        <li><Link href="https://www.tiktok.com/@kaba_date" target="_blank" className='animated-link-2'>Tik-Tok</Link></li>
                        <li><Link href="https://t.me/+vt9RZVFQ20QwZjRh" target="_blank" className='animated-link-2'>Twitter</Link></li>
                    </ul>
                </div>

            </div>
            <div className="mt-8 text-center">
                © Copyright KABA DATE 2024
            </div>
        </footer >
    )
}

export default Footer
