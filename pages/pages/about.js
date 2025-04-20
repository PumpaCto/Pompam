import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Pumpa Token</title>
        <meta name="description" content="What is Pumpa Token and our vision" />
      </Head>
      <main className="min-h-screen bg-white text-gray-800 font-sans p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
            What is Pumpa Token?
          </h1>
          <p className="text-lg mb-4">
            Pumpa Token is more than a meme coin — it's a creative ecosystem combining crypto, anime, and gaming.
          </p>
          <p className="text-lg mb-4">
            The project was born from a dream: giving one last chance to the underdogs of the crypto world. It began with anime videos, emotional stories, and now aims to expand into web-based adventure games, NFT characters, and even a full anime series.
          </p>
          <p className="text-lg mb-4">
            Our vision is to build a fun, emotional and community-powered crypto universe. 
            With every token, you support storytelling, game development and a growing anime ecosystem.
          </p>
          <p className="text-lg font-semibold mt-8">
            Join us. Be a part of the Pumpa journey.
          </p>
        </div>
      </main>
    </>
  );
}
