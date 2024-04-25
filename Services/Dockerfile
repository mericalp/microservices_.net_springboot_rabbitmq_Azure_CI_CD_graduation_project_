# Use the SDK image to build the projects
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Copy csproj files and restore as distinct layers
COPY AnimalService/*.csproj ./AnimalService/
COPY Events/*.csproj ./Events/
RUN dotnet restore ./AnimalService/AnimalService.csproj

# Copy the entire solution directories required for the build
COPY AnimalService/ ./AnimalService/
COPY Events/ ./Events/

# Set the working directory to where the main project csproj file is located
WORKDIR /app/AnimalService

# Publish the main project
RUN dotnet publish -c Release -o out

# Use the runtime image to run the built application
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/AnimalService/out /app
ENV ASPNETCORE_URLS=http://+:7001
ENTRYPOINT ["dotnet", "AnimalService.dll"]
