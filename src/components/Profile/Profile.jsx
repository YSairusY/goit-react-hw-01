import st from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={st.wrapper}>
      <div className={st.card}>
        <img className={st.image} src={image} alt="User avatar" />
        <p className={st.name}>{name}</p>
        <p className={st.tag}>@{tag}</p>
        <p className={st.location}>{location}</p>
      </div>

      <ul className={st.list}>
        <li className={st.item}>
          <span className={st.item_name}>Followers</span>
          <span className={st.item_number}>{stats.followers}</span>
        </li>
        <li className={st.item}>
          <span className={st.item_name}>Views</span>
          <span className={st.item_number}>{stats.views}</span>
        </li>
        <li className={st.item}>
          <span className={st.item_name}>Likes</span>
          <span className={st.item_number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
