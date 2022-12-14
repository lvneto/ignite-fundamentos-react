
import styles from './Post.module.css'; 

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/49030558?v=4" />
          <div className={styles.authorInfo}>
            <strong>Lauro Neto</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="05 de julho ร s 17:52h" dateTime="2022-05-11 08:03:53">Publicado hรก 1</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa ๐</p>
          <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>
          <p>๐<a href="">jane.design/doctorcare</a></p>
          <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
        </p>
      </div>
    </article>
  )
}