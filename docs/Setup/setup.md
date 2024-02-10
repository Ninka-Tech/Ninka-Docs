---
sidebar_position: 2
---

# Setup

## Build from Source

To build from source, please ensure that Go version 1.22 or higher and `make` are installed on your system.

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Quasar-host/Ninka
   ```

2. Navigate into the cloned directory:

   ```bash
   cd Ninka
   ```

3. Perform `go mod tidy` to tidy and ensure the module's dependencies are in sync:

   ```bash
   go mod tidy
   ```

4. Build the project using `make build`. If you need to build for a specific operating system, use `make build_linux`, replacing `linux` with the desired operating system:

   ```bash
   make build
   ```

5. Extract the generated executable from the `/bin` directory.

## Using Binary

If you prefer using a pre-built binary, simply download the latest release for your operating system from [GitHub Releases](https://github.com/Quasar-host/Ninka/releases).
