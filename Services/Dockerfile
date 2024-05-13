# Use the SDK image to build the projects
FROM  mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Copy csproj files and restore as distinct layers
COPY AnimalService/*.csproj ./AnimalService/
COPY Events/*.csproj ./Events/
RUN dotnet restore ./AnimalService/
# Copy the entire solution directories required for the build
COPY AnimalService/ ./AnimalService/
COPY Events/ ./Events/

# Set the working directory to where the main project csproj file is located
WORKDIR /app/AnimalService

# Publish the main project
RUN dotnet publish -c Release -o out

# Use the runtime image to run the built application
# FROM --platform=linux/amd64 mcr.microsoft.com/dotnet/aspnet:8.0
FROM mcr.microsoft.com/dotnet/aspnet:8.0-bookworm-slim-amd64 AS runtime
# FROM mcr.microsoft.com/dotnet/runtime:7.0-bullseye-slim-amd64
WORKDIR /app
COPY --from=build-env /app/AnimalService/out /app


ENV ASPNETCORE_URLS=http://+:7001 \
    ConnectionStrings__DefaultConnection= \
    Logging__LogLevel__Default=Information \
    Logging__LogLevel__Microsoft.AspNetCore=Information

ENTRYPOINT ["dotnet", "AnimalService.dll"]