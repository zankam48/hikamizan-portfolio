import React, {useEffect } from 'react';
import * as THREE from 'three';

const TechStackAnimation = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    
    const container = document.getElementById('tech-animation');
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    
    if (container.childElementCount === 0) {
      container.appendChild(renderer.domElement);
    }
    
    
    const group = new THREE.Group();
    scene.add(group);
    
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x61dafb }), 
      new THREE.MeshBasicMaterial({ color: 0xf7df1e }), 
      new THREE.MeshBasicMaterial({ color: 0x3178c6 }), 
      new THREE.MeshBasicMaterial({ color: 0x68a063 }), 
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 }), 
      new THREE.MeshBasicMaterial({ color: 0x000000 }),  
      new THREE.MeshBasicMaterial({ color: 0xe535ab }),  
      new THREE.MeshBasicMaterial({ color: 0xf34f29 }), 
    ];
    
    const radius = 4;
    const spheres = [];
    
    for (let i = 0; i < 8; i++) {
      const sphere = new THREE.Mesh(geometry, materials[i]);
      const angle = (i / 8) * Math.PI * 2;
      sphere.position.x = radius * Math.cos(angle);
      sphere.position.z = radius * Math.sin(angle);
      group.add(sphere);
      spheres.push(sphere);
    }
    
    camera.position.z = 8;
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      group.rotation.y += 0.003;
      
      spheres.forEach((sphere, index) => {
        sphere.position.y = Math.sin(Date.now() * 0.001 + index) * 0.3;
      });
      
      renderer.render(scene, camera);
    };
    
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height)
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        sphere.material.dispose();
      });
    };
  }, []);
  
  return <div id="tech-animation" className="w-full h-64 relative"></div>;
};

export default TechStackAnimation;