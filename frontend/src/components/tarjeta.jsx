import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Tarjeta = () => {
  return (
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>
  )
}
