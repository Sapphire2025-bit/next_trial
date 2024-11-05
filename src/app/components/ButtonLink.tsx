import React from 'react';
import Link from 'next/link';
import ButtonLinkProps from '../types/buttonLinkProps';

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text}) => {
  return (
    <Link className="m-6" href={href}>
      {text}
    </Link>
  );
};

export default ButtonLink;