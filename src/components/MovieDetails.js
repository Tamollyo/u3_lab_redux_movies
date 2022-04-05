import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ detailState }) => {
  return { detailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [id])

  return (
    <ul>
      {props.detailState.details.length ? (
        props.detailState.details.map((detail) => (
          <li key={detail.id}>{detail.description}</li>
        ))
      ) : (
        <h3>No Detail</h3>
      )}
    </ul>
  )
}
export default connect(mapDispatchToProps, mapStateToProps)(MovieDetails)
