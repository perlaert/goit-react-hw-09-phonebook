import style from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <div className={style.contactInfo}>
        <p className={style.contactName}>{name}:</p>
        <p>{number}</p>
      </div>
      <button className={style.btn} type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;
