package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.Feedback;
import com.sample.service.FeedbackService;

@RestController

@CrossOrigin(origins="*")
@RequestMapping("/feedback")
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/add")
    public String addFeedback(@RequestBody Feedback feedback){
        return feedbackService.saveFeedback(feedback);
    }

    @PutMapping("/updatefeedback")
    public String updateFeedback(@RequestBody Feedback feedback){
        return feedbackService.updateFeedback(feedback);
    }

    @GetMapping("/getfeedbacks")
    public List<Feedback> getFeedbacks(){
        return feedbackService.getFeedbacks();
    }

    @DeleteMapping("/deletefeedback/{id}")
    public String deleteFeedback(@PathVariable Long id){
        return feedbackService.deleteFeedback(id);
    }
}
