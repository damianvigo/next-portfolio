import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    {/* Header card */}
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='/ryan-ray-profile2.jpeg' alt='ryan-ray' className='img-fluid' />
            </div>
            <div className='col-md-8'>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default Index;
