'use client'

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const items = [
  { id: 1, name: 'Search result', category: 'Admissions', url: '#' },
  { id: 2, name: 'Search result', category: 'Admissions', url: '#' },
  { id: 3, name: 'Search result', category: 'Admissions', url: '#' },
  { id: 4, name: 'Search result', category: 'Current Students', url: '#' },
  { id: 5, name: 'Search result', category: 'Current Students', url: '#' },
]

const SearchButtonLargeScreen = ({ onClick }) => {
  return (
    <button className="flex items-center gap-x-1 text-lg font-bold text-white/90 hover:text-white" onClick={onClick}>
      <MagnifyingGlassIcon
        className="pointer-events-none size-5 text-white/60"
        aria-hidden="true"
        />
      Search 
    </button>
  )
}

const SearchButtonSmallScreen = ({ onClick }) => {
  return (
    <button className="flex items-center gap-x-1 text-4xl px-6 font-sans-condensed uppercase font-bold text-white hover:text-white" onClick={onClick}>
      Search
      <MagnifyingGlassIcon
        className="pointer-events-none size-7 relative -top-[2px] text-primary-sky"
        aria-hidden="true"
        />
    </button>
  )
}

export default function Search({mobile = false}) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  const groups = filteredItems.reduce((groups, item) => {
    return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  }, {})

  return (
    <div>
      {mobile ? <SearchButtonSmallScreen onClick={() => setOpen(true)} /> : <SearchButtonLargeScreen onClick={() => setOpen(true)} />}

      <Dialog
        transition
        className="relative z-90"
        open={open}
        onClose={() => {
          setOpen(false)
          setQuery('')
        }}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-primary-indigo/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <DialogPanel
            transition
            className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white ring-1 shadow-2xl ring-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          >
            <Combobox
              onChange={(item) => {
                if (item) {
                  window.location = item.url
                }
              }}
            >
              <div className="grid grid-cols-1">
                <ComboboxInput
                  autoFocus
                  className="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-body outline-hidden placeholder:text-body/80 sm:text-sm"
                  placeholder="Search..."
                  onChange={(event) => setQuery(event.target.value)}
                  onBlur={() => setQuery('')}
                />
                <MagnifyingGlassIcon
                  className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-body/80"
                  aria-hidden="true"
                />
              </div>

              {query === '' && (
                <div className="border-t border-gray-100 px-6 py-14 text-center sm:px-14">
                  <p className="mt-4 font-semibold text-heading">Search the Baruch College website</p>
                  <p className="mt-2 text-body/80">Quickly find information, departments, services, and more across the Baruch College site.</p>
                </div>
              )}

              {filteredItems.length > 0 && (
                <ComboboxOptions
                  static
                  as="ul"
                  className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
                >
                  {Object.entries(groups).map(([category, items]) => (
                    <li key={category}>
                      <h2 className="bg-neutral-pearl px-4 py-2.5 text-sm font-semibold text-body border-b border-neutral-pearl-dark uppercase">{category}</h2>
                      <ul className="mt-2 text-body">
                        {items.map((item) => (
                          <ComboboxOption
                            key={item.id}
                            value={item}
                            className="cursor-default px-4 py-2 select-none data-focus:bg-primary-cuny-blue data-focus:text-white data-focus:outline-hidden"
                          >
                            {item.name}
                          </ComboboxOption>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ComboboxOptions>
              )}

              {query !== '' && filteredItems.length === 0 && (
                <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                  <FaceFrownIcon className="mx-auto size-6 text-body/80" aria-hidden="true" />
                  <p className="mt-4 font-semibold text-body">No results found</p>
                  <p className="mt-2 text-body/80">We couldn't find anything with that term. Please try again.</p>
                </div>
              )}
            </Combobox>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
