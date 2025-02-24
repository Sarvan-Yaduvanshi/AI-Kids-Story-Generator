"use client";
import React from 'react'
import {  
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@heroui/button';
import { UserButton, useUser } from '@clerk/nextjs';


function Header() {

  const {user, isSignedIn} = useUser();


  const MenuList = [
    { name: 'Home', path: '/' },
    { name: 'Create Story', path: '/create-story' },
    { name: 'Explore Stories', path: '/explore-stories' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* Show NavbarMenuToggle only on small screens */}
        <div className="sm:hidden">
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </div>
        <NavbarBrand>
          <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
          <h2 className="font-bold text-2xl text-primary ml-3">Kidso Story</h2>
        </NavbarBrand>
      </NavbarContent>

      {/* Centered menu items (visible on medium and larger screens) */}
      <NavbarContent justify='center' className='hidden sm:flex'>
        {MenuList.map((item, index) => (
          <NavbarItem className='text-xl text-primary font-medium hover:underline mx-2' key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right-side button */}
      <NavbarContent justify='end'>
        <Link href={'dashboard'}>
        <Button color='primary'>
          {isSignedIn ? 'Dashboard' : 'Get Started'}
        </Button>
        </Link>
        <UserButton/>
      </NavbarContent>

      {/* Mobile menu */}
      {isMenuOpen && (
        <NavbarMenu>
          {MenuList.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link href={item.path}>{item.name}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}

export default Header;
