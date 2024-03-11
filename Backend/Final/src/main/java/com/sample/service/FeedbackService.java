package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Feedback;
import com.sample.repository.FeedbackRepository;

@Service
public class FeedbackService {
    
    @Autowired
    private FeedbackRepository feedbackRepository;

    public String saveFeedback(Feedback feedback){
        feedbackRepository.save(feedback);
        return "Feedback saved";
    }

    public String updateFeedback(Feedback feedback){
        feedbackRepository.saveAndFlush(feedback);
        return "Feedback updated";
    }

    public List<Feedback> getFeedbacks(){
        return feedbackRepository.findAll();
    }

    public String deleteFeedback(Long id){
        feedbackRepository.deleteById(id);
        return "Feedback deleted";
    }
}
