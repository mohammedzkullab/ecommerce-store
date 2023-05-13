import { Button, NoSSR } from "components";
import ImageGrid from "components/ImageGrid";
import { FOOTER_IMAGES, FOOTER_NAVIGATION } from "layouts/MainLayout/data";
import {
  DevicePhoneMobileIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
} from "lib/@heroicons";
import Link from "next/link";

export default function Footer() {
  return (
    <NoSSR>
      <footer className="bg-[#202325]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="container px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-16">
          <div className="py-8 mb-16 border-b border-white/10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-lg leading-6 text-gray-300">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <Button
                  variant="outline"
                  type="submit"
                  className="flex w-full "
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold leading-6 text-white ">
                    Contact Info
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="flex text-sm leading-6 text-gray-300 md:gap-3 ">
                      <MapPinIcon
                        width={30}
                        height={30}
                        className="hidden md:block"
                      />
                      <span>
                        123 Street, Old Trafford, New South London , UK
                      </span>
                    </li>
                    <li className="flex text-sm leading-6 text-gray-300 md:gap-3 ">
                      <EnvelopeOpenIcon
                        width={20}
                        height={20}
                        className="hidden md:block"
                      />
                      info@sitename.com
                    </li>
                    <li className="flex text-sm leading-6 text-gray-300 md:gap-3 ">
                      <DevicePhoneMobileIcon
                        width={20}
                        height={20}
                        className="hidden md:block"
                      />
                      + 457 789 789 65
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-xl font-semibold leading-6 text-white ">
                    Useful Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {FOOTER_NAVIGATION?.useful_links?.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="md:mt-0">
                  <h3 className="text-xl font-semibold leading-6 text-white ">
                    Account
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {FOOTER_NAVIGATION?.account?.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 xl:col-span-1 xl:mt-0">
              <h3 className="text-xl font-semibold leading-6 text-white ">
                Instagram
              </h3>
              <ImageGrid files={FOOTER_IMAGES} />
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              Copyright © 2023 . Built by{" "}
              <Link
                href="https://www.linkedin.com/in/mohammed-kullab/"
                className="hover:text-white"
              >
                Eng.Mohammed ziyad kullab
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </NoSSR>
  );
}
