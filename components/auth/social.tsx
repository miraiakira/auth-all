'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
  const onClick = (provider: 'google' | 'github' | 'line') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-y-2 gap-x-2">
      <Button
        size="lg"
        className="w-full gap-x-1"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        className="w-full gap-x-1"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
      <Button
        size="lg"
        className="w-full gap-x-1"
        variant="outline"
        onClick={() => onClick('line')}
      >
        <FaLine className="h-5 w-5" />
      </Button>
    </div>
  );
};
