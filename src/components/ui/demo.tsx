import AnimatedSocialLinks, {
  type Social,
} from '@/components/ui/social-links';

const AnimatedSocialLinksDemo = () => {
  const socials: Social[] = [
    {
      name: 'Instagram',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=128&auto=format&fit=crop&q=60',
      url: 'https://instagram.com',
    },
    {
      name: 'LinkedIn',
      image: 'https://images.unsplash.com/photo-1611944212129-43b230939594?w=128&auto=format&fit=crop&q=60',
      url: 'https://linkedin.com',
    },
    {
      name: 'Spotify',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=128&auto=format&fit=crop&q=60',
      url: 'https://spotify.com',
    },
    {
      name: 'TikTok',
      image: 'https://images.unsplash.com/photo-1611605698335-8b15d27e03f9?w=128&auto=format&fit=crop&q=60',
      url: 'https://tiktok.com',
    },
  ];

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-black px-4 py-10">
      <AnimatedSocialLinks socials={socials} />
    </main>
  );
};

export { AnimatedSocialLinksDemo as DemoOne };
