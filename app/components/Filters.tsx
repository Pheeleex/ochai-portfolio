'use client'
import React, { Suspense } from 'react';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';


interface FiltersProps {
  activeLink: string;
  onFilterChange: (link: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ activeLink, onFilterChange }) => {
  const links = ['all', 'Real estate', 'Ecommerce', 'WEB3', '3D & AR', 'CRM/Business Operations', 'other'];
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    if (activeLink === link) {
      onFilterChange('');

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      });
    } else {
      onFilterChange(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <Suspense fallback={<div>Loading filters...</div>}>
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${activeLink === link ? 'gradient_blue-purple' : ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  </Suspense>
  );
};

export default Filters;
