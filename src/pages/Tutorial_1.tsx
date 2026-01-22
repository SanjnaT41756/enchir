import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import Stars from "../components/Stars";
import Header from "../components/Header";
import { useEffect, useState } from 'react';
import enchirNeutral from '../assets/images/enchirNeutral.png';
import enchirSad from '../assets/images/enchirSad.png';

import './Tutorial_1.scss';

interface SiteStatus {
  isHttp: boolean;
  url: string;
}

function Tutorial_1() {
  const [status, setStatus] = useState<SiteStatus>({ isHttp: false, url: '' });

  useEffect(() => {
    // Check if we're in a Chrome extension context
    if (chrome?.storage) {
      // Get the current status from storage
      chrome.storage.local.get(['isHttpSite', 'currentUrl'], (result) => {
        setStatus({
          isHttp: result.isHttpSite || false,
          url: result.currentUrl || window.location.href
        });
      });

      // Listen for changes to the storage
      const handleStorageChange = (changes: { [key: string]: chrome.storage.StorageChange }) => {
        if (changes.isHttpSite || changes.currentUrl) {
          setStatus(prev => ({
            isHttp: changes.isHttpSite?.newValue ?? prev.isHttp,
            url: changes.currentUrl?.newValue ?? prev.url
          }));
        }
      };

      chrome.storage.onChanged.addListener(handleStorageChange);
      return () => {
        chrome.storage.onChanged.removeListener(handleStorageChange);
      };
    }
  }, []);

  // Determine content based on HTTP status
  const getContent = () => {
    if (status.isHttp) {
      return {
        header: 'Insecure Connection',
        text: `HTTPS encrypts data between your browser and the site. This page, ${new URL(status.url).hostname}, isn't encrypted, so information you enter could be visible to others.`,
        image: enchirSad
      };
    }
    return {
      header: 'Welcome to Enchir',
      text: 'Your personal web exploring buddy',
      image: enchirNeutral
    };
  };

  const content = getContent();

  return (
    <div className='page-contain tut-1'> 
      <Header page={content.header} />
      <section className='content'>
        <div className='text-content'>
          <div className='desc'>
            <p className='desc-text'>{content.text}</p>
          </div>
        </div>
        <div className='image-container'>
          <img 
            className='enchir-icon' 
            src={content.image} 
            alt={content.header} 
          />
        </div>
      </section>
    </div>
  );
}

export default Tutorial_1;