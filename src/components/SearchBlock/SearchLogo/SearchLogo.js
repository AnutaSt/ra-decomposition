/**
 * Логотип возле поиска
 */

const SearchLogo = ({ link, name, img, onClick}) => {

	/**
	 * Содержит свойства name, link, img, и функцию onClick, которые являются обязательными
	 */

	return (
		<div className={name}>
			<a href={link} className={name + '-href'} onClick={onClick}>
				<img src={img} alt='logo' />
			</a>
		</div>
	)
}

SearchLogo.defaultProps = {
	img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6V16aAO8XRNDXr1sDnI-AyTkCgx1KoPrkvACzv-3MQ&s'
}

export default SearchLogo;