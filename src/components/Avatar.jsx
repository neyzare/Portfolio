import photo from '../assets/230920_lucas-narguet_HD_sRGB-(1).jpg'

export const Avatar = () => {

  return(
    <>
    <div className='flex flex-col p-6'>
    <div className="avatar mb-4 ">
      <div className="w-40 h-40 rounded-full">
      <img src={photo}
      height={100}
      width={100}
      />
  </div>
    </div>
    <div>
      <h1 className='mb-4 text-5xl text-black font-bold'>Lucas Narguet</h1>
      <div>
      <span className='text-3xl'>Etudiant en Bachelor développeur Full-Stack</span>
      </div>
      <div className='mt-5'>
      <p className='mb-4 max-w-sm text-2xl '>Je suis Lucas, étudiant en Bachelor passionné par le développement informatique et la cybersécurité. J’ai acquis des compétences en programmation, gestion de systèmes et sécurité des données, et je suis toujours à la recherche de nouveaux défis pour approfondir mes connaissances et créer des solutions sécurisées</p>
      </div>
    </div>
    </div>
    </> 
  )
}