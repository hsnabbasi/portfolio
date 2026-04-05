// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} <Link target="_blank" href="https://www.linkedin.com/in/hassan-abbasi-dev" className="text-[#16f2b3]">Hassan Fayyaz Abbasi</Link>. Built with Next.js and Tailwind CSS.
          </p>
          <div className="mt-4 flex items-center gap-5 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/hsnabbasi"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href="mailto:mhassanabbasi313@gmail.com"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <span>Email</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
