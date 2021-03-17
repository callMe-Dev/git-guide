import React from 'react';
import createProjectGitLab from '../../../assets/gitLabAssets/create-project-gitlab.png';
import repositoryGitLab from '../../../assets/gitLabAssets/repository-gitlab.png';
import formGitLab from '../../../assets/gitLabAssets/form-gitlab.png';
import LazyImg from '../../LazyImg/LazyImg';

export default function GitLab() {
  return (
    <section className='Repository'>
      <h1 className='Repository__title'>Crea tu repositorio en GitLab</h1>
      <article className='Repository__content'>
        <p>
          Una vez que tengas tu cuenta en
          <a
            target='_blank'
            rel='noreferrer'
            accessKey='git install windows'
            href='https://gitlab.com/'
          >
            GitLab
          </a>
          debes dirigirte a la vista de Projects elegir la opción{' '}
          <b>Create Blank Project</b>:
        </p>
        <LazyImg source={createProjectGitLab} imgAlt='Create Project GitLab' />
        <p>
          Luego debes rellenar los campos con la información de tu proyecto y
          darle click al botón <b>Create project</b>
        </p>
        <LazyImg source={formGitLab} imgAlt='form GitLab' />
        <p>
          Cuando termines, verás la opción <b>New File</b>, dale click y sube tu
          proyecto :)
        </p>
        <LazyImg source={repositoryGitLab} imgAlt='repository GitLab' />
      </article>
    </section>
  );
}
