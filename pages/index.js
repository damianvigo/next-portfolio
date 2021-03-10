import Layout from '../components/Layout';
import Link from 'next/link';
import { skills, experiencies, projects } from '../profile';

// console.log(skills);
// console.log(experiencies);

const Index = () => (
  <Layout titleHead='home'>
    {/* Header card */}
    <header className='row'>
      <section className='col-md-12'>
        <section className='card card-body bg-secondary text-light'>
          <article className='row justify-content-center align-items-center'>
            <figure className='col-md-12 col-lg-4 mb-3'>
              <img src='/ryan-ray-profile2.jpeg' alt='ryan-ray' className='img-fluid' />
            </figure>
            <article className='col-md-12 col-lg-8'>
              <h1>Rayn Ray</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore cumque consequuntur aliquam ratione. Earum
                quaerat, molestias amet perspiciatis deserunt temporibus maiores et reprehenderit vitae aliquid illo quas dolor provident.
                Necessitatibus magni dignissimos dolores, minima culpa inventore hic quos dolore totam iusto earum adipisci corrupti
                corporis facere? Tempore neque accusamus eos? Molestias, architecto quae vel eius ea ducimus. Odit, autem. Laudantium modi
                ullam voluptates corrupti esse, beatae a qui et nihil eveniet architecto quibusdam odit iusto exercitationem quia temporibus
                accusantium odio aspernatur incidunt? Eveniet commodi est modi fugit? Inventore, neque.
              </p>
              <a href='/hireme'>Hire Me</a>
            </article>
          </article>
        </section>
      </section>
    </header>

    {/* Second section */}
    <section className='row py-2'>
      <section className='col-md-4'>
        <article className='card bg-light'>
          <div className='card-body'>
            <h1>Skills</h1>
            {/* tip - este bucle abstraerlo en un componente */}
            {skills.map(({ skill, percentage }, i) => (
              <div className='py-3' key={i}>
                <h5>{skill}</h5>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: `${percentage}%` }}
                    aria-valuenow='50'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className='col-md-8'>
        <article className='card bg-light h-100'>
          <div className='card-body d-flex flex-column justify-content-space-between'>
            <h1>Experience</h1>

            <ul className='mt-4 mb-0'>
              {experiencies.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>{from && to ? `${from}-${to}` : `${from}`}</h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </section>

    {/* Portfolio Section */}

    <section className='row'>
      <section className='col-md-12'>
        <article className='card card-body bg-dark'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-light text-center'>Portfolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className='col-md-6 col-lg-4 p-2' key={i}>
                <figure className='card h-100'>
                  <div className='overflow'>
                    <img src={`/${image}`} alt='' className='card-img-top' />
                  </div>
                  <div className='card-body'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href='#!'>Know more</a>
                  </div>
                </figure>
              </div>
            ))}
          </div>
          <div className='text-center mt-4'>
            <Link href='/'>
              <a className='btn btn-outline-light'>More Projects</a>
            </Link>
          </div>
        </article>
      </section>
    </section>

    {/*     <style jsx>{
      `.overflow {
        
      }`
    }
    </style> */}
  </Layout>
);

export default Index;
