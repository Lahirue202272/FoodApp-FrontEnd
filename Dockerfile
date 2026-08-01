# Declare build-time environment variables
ARG REACT_APP_BASE_URL

# Set as env vars so they're available to `npm run build`
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL