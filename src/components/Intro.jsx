import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Ken Kipkorir</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Front End Developer</p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          I'm a front-end developer with a passion for crafting responsive, scalable, and user-first digital products. 
          I specialize in modern web technologies like React, Angular, and TypeScript—bringing UIs to life with clean code, 
          thoughtful design, and smooth interactions.
          <br />
          From prototyping interfaces in Figma to deploying production-ready apps, I’ve delivered solutions across sectors 
          including media, utilities, and e-commerce. My experience spans secure payment integrations, real-time data flows, 
          and DevOps workflows using GitHub, CI/CD, and cloud platforms.
          <br />
          I build with performance, accessibility, and maintainability in mind—always aiming to solve real-world problems with practical, elegant code.
          <br />
          You can find my projects and experiments on{' '}
          <a
              href="https://github.com/kent-ko"
              target="_blank"
              className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
              rel="noreferrer noopener"
          >
              GitHub
          </a>{' '}
          or connect with me on{' '}
          <a
              href="https://www.linkedin.com/in/ken-kipkorir/"
              target="_blank"
              className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
              rel="noreferrer noopener"
          >
              LinkedIn
          </a>.
        </p>

    </div>
  )
}

export default Intro